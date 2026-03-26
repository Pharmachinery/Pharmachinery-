import React, { useEffect, useMemo, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

function Analytics() {
  const [loading, setLoading] = useState(true);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "messages"));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setMessages(data);
      } catch (error) {
        console.log("Analytics error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAnalytics();
  }, []);

  const analytics = useMemo(() => {
    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();

    const totalMessages = messages.length;

    const newMessages = messages.filter(
      (msg) => (msg.status || "new") === "new"
    ).length;

    const readMessages = messages.filter(
      (msg) => msg.status === "read"
    ).length;

    const messagesThisMonth = messages.filter((msg) => {
      if (!msg.createdAt?.seconds) return false;
      const date = new Date(msg.createdAt.seconds * 1000);
      return (
        date.getMonth() === currentMonth &&
        date.getFullYear() === currentYear
      );
    });

    const monthlyCount = messagesThisMonth.length;
    const target = 50;
    const targetProgress = Math.min((monthlyCount / target) * 100, 100);

    const readRate =
      totalMessages > 0 ? Math.round((readMessages / totalMessages) * 100) : 0;

    const newRate =
      totalMessages > 0 ? Math.round((newMessages / totalMessages) * 100) : 0;

    const sortedRecent = [...messages]
      .sort((a, b) => {
        const aTime = a.createdAt?.seconds || 0;
        const bTime = b.createdAt?.seconds || 0;
        return bTime - aTime;
      })
      .slice(0, 6);

    const monthlyWeeks = [0, 0, 0, 0];
    messagesThisMonth.forEach((msg) => {
      if (!msg.createdAt?.seconds) return;
      const d = new Date(msg.createdAt.seconds * 1000);
      const day = d.getDate();

      if (day <= 7) monthlyWeeks[0]++;
      else if (day <= 14) monthlyWeeks[1]++;
      else if (day <= 21) monthlyWeeks[2]++;
      else monthlyWeeks[3]++;
    });

    const maxWeek = Math.max(...monthlyWeeks, 1);

    return {
      totalMessages,
      newMessages,
      readMessages,
      monthlyCount,
      target,
      targetProgress,
      readRate,
      newRate,
      sortedRecent,
      monthlyWeeks,
      maxWeek,
    };
  }, [messages]);

  if (loading) {
    return (
      <div className="bg-white rounded-3xl border shadow-sm p-8">
        <p className="text-gray-500">Loading analytics...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6 min-h-screen bg-gradient-to-br from-[#f8fafc] via-white to-[#fff7ed] p-1 rounded-[32px]">
      <div className="rounded-[32px] bg-gradient-to-r from-[#111827] via-[#1f2937] to-[#7f1d1d] text-white p-8 shadow-[0_20px_60px_rgba(17,24,39,0.35)] overflow-hidden relative">
        <div className="absolute top-0 right-0 w-72 h-72 bg-red-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-orange-400/10 rounded-full blur-3xl" />

        <div className="relative z-10 flex flex-col xl:flex-row xl:items-end xl:justify-between gap-6">
          <div>
            <p className="uppercase tracking-[0.3em] text-xs text-white/70 mb-3">
              Performance Overview
            </p>
            <h1 className="text-3xl md:text-4xl font-bold mb-3">
              Analytics Dashboard
            </h1>
            <p className="text-white/80 max-w-2xl leading-7">
              Track website inquiries, unread volume, processed messages,
              monthly targets, and operational performance in one executive view.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 min-w-[280px]">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10">
              <p className="text-sm text-white/70">Monthly Target</p>
              <h3 className="text-2xl font-bold mt-1">
                {analytics.monthlyCount}/{analytics.target}
              </h3>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10">
              <p className="text-sm text-white/70">Read Rate</p>
              <h3 className="text-2xl font-bold mt-1">{analytics.readRate}%</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-[32px] bg-gradient-to-br from-[#f8fafc] via-white to-[#fff7ed] p-2">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          <div className="relative overflow-hidden rounded-3xl border border-white/40 bg-white/70 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] p-6 group hover:-translate-y-1 transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-100 rounded-full blur-3xl opacity-60 group-hover:opacity-80 transition" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-red-500 to-orange-400 flex items-center justify-center text-white text-xl shadow-lg mb-5">
                ✉️
              </div>
              <p className="text-sm font-medium text-gray-500 mb-2">Total Messages</p>
              <h2 className="text-4xl font-bold text-[#111827] tracking-tight">
                {analytics.totalMessages}
              </h2>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs text-gray-400">All time activity</span>
                <span className="text-xs font-semibold text-red-600 bg-red-50 px-3 py-1 rounded-full">
                  Live
                </span>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-white/40 bg-white/70 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] p-6 group hover:-translate-y-1 transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-rose-100 rounded-full blur-3xl opacity-60 group-hover:opacity-80 transition" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-rose-500 to-red-500 flex items-center justify-center text-white text-xl shadow-lg mb-5">
                🔔
              </div>
              <p className="text-sm font-medium text-gray-500 mb-2">Unread / New</p>
              <h2 className="text-4xl font-bold text-[#111827] tracking-tight">
                {analytics.newMessages}
              </h2>
              <div className="mt-4">
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-rose-500 to-red-500"
                    style={{ width: `${analytics.newRate}% `}}
                  />
                </div>
                <p className="text-xs text-gray-400 mt-2">
                  {analytics.newRate}% of total messages
                </p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-white/40 bg-white/70 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] p-6 group hover:-translate-y-1 transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100 rounded-full blur-3xl opacity-60 group-hover:opacity-80 transition" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-400 flex items-center justify-center text-white text-xl shadow-lg mb-5">
                ✅
              </div>
              <p className="text-sm font-medium text-gray-500 mb-2">Read Messages</p>
              <h2 className="text-4xl font-bold text-[#111827] tracking-tight">
                {analytics.readMessages}
              </h2>
              <div className="mt-4">
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-green-400"
                    style={{ width: `${analytics.readRate}%` }}
                  />
                </div>
                <p className="text-xs text-gray-400 mt-2">
                  {analytics.readRate}% processed successfully
                </p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-white/40 bg-[#111827] shadow-[0_10px_40px_rgba(17,24,39,0.28)] p-6 group hover:-translate-y-1 transition-all duration-300 text-white">
            <div className="absolute -top-10 -right-10 w-36 h-36 bg-red-500/20 rounded-full blur-3xl opacity-80" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 flex items-center justify-center text-xl shadow-lg mb-5">
                🎯
              </div>
              <p className="text-sm font-medium text-white/70 mb-2">Monthly Target</p>
              <h2 className="text-4xl font-bold tracking-tight">
                {analytics.monthlyCount}
              </h2>
              <p className="text-sm text-white/60 mt-1">Target: {analytics.target}</p>

              <div className="mt-4">
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-red-400 to-orange-300"
                    style={{ width: `${analytics.targetProgress}%` }}
                  />
                </div>
                <p className="text-xs text-white/60 mt-2">
                  {Math.round(analytics.targetProgress)}% target completion
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 bg-white/80 backdrop-blur-xl rounded-[32px] border border-white/40 shadow-[0_10px_40px_rgba(0,0,0,0.08)] p-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl font-bold text-[#111827]">
                Monthly Performance
              </h2>
              <p className="text-gray-500 text-sm mt-1">
                Weekly message volume inside the current month
              </p>
            </div>
            <div className="text-left md:text-right">
              <p className="text-sm text-gray-500">Target Achievement</p>
              <h3 className="text-xl font-bold text-[#111827]">
                {Math.round(analytics.targetProgress)}%
              </h3>
            </div>
          </div>

          <div className="mb-8">
            <div className="flex justify-between text-sm mb-2 text-gray-500">
              <span>Progress to monthly target</span>
              <span>
                {analytics.monthlyCount}/{analytics.target}
              </span>
            </div>
            <div className="w-full h-4 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-red-500 to-orange-400 transition-all duration-500"
                style={{ width: `${analytics.targetProgress}%` }}
              />
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4 items-end h-72">
            {analytics.monthlyWeeks.map((value, index) => {
              const height =`${(value / analytics.maxWeek) * 100}%`;

              return (
                <div key={index} className="flex flex-col justify-end h-full">
                  <div className="text-center text-sm font-semibold text-[#111827] mb-2">
                    {value}
                  </div>
                  <div className="bg-gray-100 rounded-2xl h-full flex items-end p-2 shadow-inner">
                    <div
                      className="w-full rounded-xl bg-gradient-to-t from-[#dc2626] to-[#f59e0b] transition-all duration-500"
                      style={{ height }}
                    />
                  </div>
                  <p className="text-center text-xs text-gray-500 mt-3">
                    Week {index + 1}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-xl rounded-[32px] border border-white/40 shadow-[0_10px_40px_rgba(0,0,0,0.08)] p-6">
          <h2 className="text-2xl font-bold text-[#111827] mb-6">
            Message Distribution
          </h2>

          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Read Rate</span>
                <span>{analytics.readRate}%</span>
              </div>
              <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-green-500 rounded-full"
                  style={{ width: `${analytics.readRate}%` }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Unread Rate</span>
                <span>{analytics.newRate}%</span>
              </div>
              <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-red-500 rounded-full"
                  style={{ width: `${analytics.newRate}%` }}
                />
              </div>
            </div>

            <div className="rounded-2xl bg-[#f9fafb] border p-5 shadow-sm">
              <p className="text-sm text-gray-500 mb-2">Performance Status</p>
              <h3 className="text-2xl font-bold text-[#111827] mb-2">
                {analytics.readRate >= 60 ? "Strong" : "Needs Attention"}
              </h3>
              <p className="text-sm text-gray-500 leading-6">
                This score reflects how efficiently incoming messages are being
                reviewed and processed by the team.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white/80 backdrop-blur-xl rounded-[32px] border border-white/40 shadow-[0_10px_40px_rgba(0,0,0,0.08)] p-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl font-bold text-[#111827]">
              Recent Activity
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              Latest incoming messages and current handling status
            </p>
          </div>
        </div>

        {analytics.sortedRecent.length === 0 ? (
          <p className="text-gray-500">No recent activity found.</p>
        ) : (
          <div className="space-y-4">
            {analytics.sortedRecent.map((msg) => (
              <div
                key={msg.id}
                className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border rounded-2xl p-5 hover:shadow-md hover:border-red-100 transition bg-white"
              >
                <div className="min-w-0">
                  <h3 className="font-semibold text-[#111827]">
                    {msg.name || msg.user_name || "Unknown User"}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1 break-all">
                    {msg.email || msg.user_email || "No email"}
                  </p>
                  <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                    {msg.message || "No message content"}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <span
                    className={`px-4 py-2 rounded-full text-sm font-medium ${
                      (msg.status || "new") === "read"
                        ? "bg-green-50 text-green-600"
                        : "bg-red-50 text-red-600"
                    }`}
                  >
                    {msg.status || "new"}
                  </span>

                  <span className="text-sm text-gray-400 whitespace-nowrap">
                    {msg.createdAt?.seconds
                      ? new Date(msg.createdAt.seconds * 1000).toLocaleDateString()
                      : "-"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Analytics;