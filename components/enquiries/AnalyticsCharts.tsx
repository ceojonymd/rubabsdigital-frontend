"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    Chart: any;
  }
}

type Item = { label: string; value: number };

export default function AnalyticsCharts({
  statusBuckets,
  deliveryBuckets,
  recoveryBuckets,
  topServices,
  volumeTrend,
}: {
  statusBuckets: Item[];
  deliveryBuckets: Item[];
  recoveryBuckets: Item[];
  topServices: Item[];
  volumeTrend: Item[];
}) {
  useEffect(() => {
    let mounted = true;

    async function init() {
      if (!window.Chart) {
        await new Promise<void>((resolve, reject) => {
          const existing = document.querySelector('script[data-chartjs="true"]') as HTMLScriptElement | null;
          if (existing) {
            existing.addEventListener("load", () => resolve(), { once: true });
            existing.addEventListener("error", () => reject(new Error("Chart.js failed to load")), { once: true });
            if ((window as any).Chart) resolve();
            return;
          }

          const script = document.createElement("script");
          script.src = "https://cdn.jsdelivr.net/npm/chart.js@4.5.0";
          script.async = true;
          script.dataset.chartjs = "true";
          script.onload = () => resolve();
          script.onerror = () => reject(new Error("Chart.js failed to load"));
          document.body.appendChild(script);
        });
      }

      if (!mounted || !window.Chart) return;

      const Chart = window.Chart;

      const destroyIf = (key: string) => {
        const existing = Chart.getChart(key);
        if (existing) existing.destroy();
      };

      destroyIf("statusChart");
      destroyIf("deliveryChart");
      destroyIf("recoveryChart");
      destroyIf("serviceChart");
      destroyIf("trendChart");

      new Chart(document.getElementById("statusChart"), {
        type: "bar",
        data: {
          labels: statusBuckets.map((i) => i.label),
          datasets: [{
            label: "Lead Status",
            data: statusBuckets.map((i) => i.value),
            backgroundColor: "rgba(0,229,160,0.45)",
            borderColor: "rgba(0,229,160,0.9)",
            borderWidth: 1,
            borderRadius: 8,
          }]
        },
        options: baseOptions(),
      });

      new Chart(document.getElementById("deliveryChart"), {
        type: "doughnut",
        data: {
          labels: deliveryBuckets.map((i) => i.label),
          datasets: [{
            data: deliveryBuckets.map((i) => i.value),
            backgroundColor: [
              "rgba(0,229,160,0.6)",
              "rgba(255,107,107,0.6)",
              "rgba(247,183,49,0.6)",
              "rgba(85,145,199,0.6)",
              "rgba(180,180,180,0.45)",
            ],
            borderWidth: 1,
          }]
        },
        options: doughnutOptions(),
      });

      new Chart(document.getElementById("recoveryChart"), {
        type: "bar",
        data: {
          labels: recoveryBuckets.map((i) => i.label),
          datasets: [{
            label: "Recovery State",
            data: recoveryBuckets.map((i) => i.value),
            backgroundColor: [
              "rgba(120,120,120,0.4)",
              "rgba(247,183,49,0.45)",
              "rgba(255,107,107,0.45)",
            ],
            borderWidth: 1,
            borderRadius: 8,
          }]
        },
        options: baseOptions(),
      });

      new Chart(document.getElementById("serviceChart"), {
        type: "bar",
        data: {
          labels: topServices.map((i) => i.label),
          datasets: [{
            label: "Top Services",
            data: topServices.map((i) => i.value),
            backgroundColor: "rgba(85,145,199,0.45)",
            borderColor: "rgba(85,145,199,0.9)",
            borderWidth: 1,
            borderRadius: 8,
          }]
        },
        options: baseOptions(),
      });

      new Chart(document.getElementById("trendChart"), {
        type: "line",
        data: {
          labels: volumeTrend.map((i) => i.label),
          datasets: [{
            label: "Lead Volume",
            data: volumeTrend.map((i) => i.value),
            borderColor: "rgba(0,229,160,0.9)",
            backgroundColor: "rgba(0,229,160,0.18)",
            fill: true,
            tension: 0.35,
          }]
        },
        options: baseOptions(),
      });
    }

    init();
    return () => { mounted = false; };
  }, [statusBuckets, deliveryBuckets, recoveryBuckets, topServices, volumeTrend]);

  return (
    <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
      <ChartCard title="Lead Status"><canvas id="statusChart" /></ChartCard>
      <ChartCard title="Delivery State"><canvas id="deliveryChart" /></ChartCard>
      <ChartCard title="Recovery State"><canvas id="recoveryChart" /></ChartCard>
      <ChartCard title="Top Services"><canvas id="serviceChart" /></ChartCard>
      <ChartCard title="Lead Trend"><canvas id="trendChart" /></ChartCard>
    </div>
  );
}

function ChartCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div
      style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        borderRadius: "1rem",
        padding: "1rem",
        minHeight: "320px",
      }}
    >
      <div style={{ fontWeight: 700, marginBottom: "0.9rem" }}>{title}</div>
      {children}
    </div>
  );
}

function baseOptions() {
  return {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: { color: "#cfcfcf" },
      },
    },
    scales: {
      x: {
        ticks: { color: "#a8a8a8" },
        grid: { color: "rgba(255,255,255,0.06)" },
      },
      y: {
        ticks: { color: "#a8a8a8" },
        grid: { color: "rgba(255,255,255,0.06)" },
        beginAtZero: true,
      },
    },
  };
}

function doughnutOptions() {
  return {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: { color: "#cfcfcf" },
      },
    },
  };
}
