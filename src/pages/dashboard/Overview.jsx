import React, { useEffect, useMemo, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

function Overview() {
  const [loading, setLoading] = useState(true);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchOverview = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "messages"));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setMessages(data);
      } catch (error) {
        console.log("Overview fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOverview();
  }, []);

  const overview = useMemo(() => {
    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();

    const totalMessages = messages.length;

    const unreadMessages = messages.filter(
      (msg) => (msg.status || "new") === "new"
    ).length;

    const readMessages = messages.filter(
      (msg) => msg.status === "read"
    ).length;

    const messagesThisMonth = messages.filter((msg) => {
      if (!msg.createdAt?.seconds) return false;
      const d = new Date(msg.createdAt.seconds * 1000);
      return (
        d.getMonth() === currentMonth &&
        d.getFullYear() === currentYear
      );
    });

    const monthlyCount = messagesThisMonth.length;

    const target = 50;
    const progress = Math.min((monthlyCount / target) * 100, 100);

    const recentMessages = [...messages]
      .sort((a, b) => {
        const aTime = a.createdAt?.seconds || 0;
        const bTime = b.createdAt?.seconds || 0;
        return bTime - aTime;
      })
      .slice(0, 5);

    const todayMessages = messages.filter((msg) => {
      if (!msg.createdAt?.seconds) return false;
      const d = new Date(msg.createdAt.seconds * 1000);
      return (
        d.getDate() === now.getDate() &&
        d.getMonth() === now.getMonth() &&
        d.getFullYear() === now.getFullYear()
      );
    }).length;

    const readRate =
      totalMessages > 0 ? Math.round((readMessages / totalMessages) * 100) : 0;

    const unreadRate =
      totalMessages > 0 ? Math.round((unreadMessages / totalMessages) * 100) : 0;

    return {
      totalMessages,
      unreadMessages,
      readMessages,
      monthlyCount,
      target,
      progress,
      recentMessages,
      todayMessages,
      readRate,
      unreadRate,
    };
  }, [messages]);

  if (loading) {
    return (
      <div className="bg-white rounded-3xl border shadow-sm p-8">
        <p className="text-gray-500">Loading overview...</p>
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
              Executive Overview
            </p>
            <h1 className="text-3xl md:text-4xl font-bold mb-3">
              Dashboard Overview
            </h1>
            <p className="text-white/80 max-w-2xl leading-7">
              Monitor website inquiries, unread volume, monthly progress,
              response efficiency, and the latest activity through one premium
              command center.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 min-w-[280px]">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10">
              <p className="text-sm text-white/70">Today</p>
              <h3 className="text-2xl font-bold mt-1">{overview.todayMessages}</h3>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10">
              <p className="text-sm text-white/70">Read Rate</p>
              <h3 className="text-2xl font-bold mt-1">{overview.readRate}%</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-[32px] bg-gradient-to-br from-[#f8fafc] via-white to-[#fff7ed] p-2">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          <div className="relative overflow-hidden rounded-3xl border border-white/40 bg-white/75 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] p-6 group hover:-translate-y-1 transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-100 rounded-full blur-3xl opacity-60" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-red-500 to-orange-400 flex items-center justify-center text-white text-xl shadow-lg mb-5">
                ✉️
              </div>
              <p className="text-sm font-medium text-gray-500 mb-2">Total Messages</p>
              <h2 className="text-4xl font-bold text-[#111827] tracking-tight">
                {overview.totalMessages}
              </h2>
              <p className="text-xs text-gray-400 mt-4">All inquiries received</p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-white/40 bg-white/75 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] p-6 group hover:-translate-y-1 transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-rose-100 rounded-full blur-3xl opacity-60" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-rose-500 to-red-500 flex items-center justify-center text-white text-xl shadow-lg mb-5">
                🔔
              </div>
              <p className="text-sm font-medium text-gray-500 mb-2">Unread Messages</p>
              <h2 className="text-4xl font-bold text-[#111827] tracking-tight">
                {overview.unreadMessages}
              </h2>
              <div className="mt-4">
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-rose-500 to-red-500"
                    style={{ width: `${overview.unreadRate}%` }}
                  />
                </div>
                <p className="text-xs text-gray-400 mt-2">
                  {overview.unreadRate}% waiting for review
                </p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-white/40 bg-white/75 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] p-6 group hover:-translate-y-1 transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100 rounded-full blur-3xl opacity-60" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-400 flex items-center justify-center text-white text-xl shadow-lg mb-5">
                ✅
              </div>
              <p className="text-sm font-medium text-gray-500 mb-2">Read Messages</p>
              <h2 className="text-4xl font-bold text-[#111827] tracking-tight">
                {overview.readMessages}
              </h2>
              <div className="mt-4">
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-green-400"
                    style={{ width: `${overview.readRate}%` }}
                  />
                </div>
                <p className="text-xs text-gray-400 mt-2">
                  {overview.readRate}% processed successfully
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
                {overview.monthlyCount}
              </h2>
              <p className="text-sm text-white/60 mt-1">Target: {overview.target}</p>

              <div className="mt-4">
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-red-400 to-orange-300"
                    style={{ width: `${overview.progress}%` }}
                  />
                </div>
                <p className="text-xs text-white/60 mt-2">
                  {Math.round(overview.progress)}% target completion
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
                Recent Messages
              </h2>
              <p className="text-gray-500 text-sm mt-1">
                Latest incoming inquiries from the website
              </p>
            </div>
          </div>

          {overview.recentMessages.length === 0 ? (
            <p className="text-gray-500">No messages available.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b text-gray-500 text-sm">
                    <th className="py-3 px-2">Name</th>
                    <th className="py-3 px-2">Email</th>
                    <th className="py-3 px-2">Phone</th>
                    <th className="py-3 px-2">Status</th>
                  </tr>
                </thead>

                <tbody>
                  {overview.recentMessages.map((msg) => (
                    <tr key={msg.id} className="border-b hover:bg-gray-50/70 transition">
                      <td className="py-4 px-2 text-[#111827] font-medium">
                        {msg.name || msg.user_name || "-"}
                      </td>
                      <td className="py-4 px-2 text-gray-700">
                        {msg.email || msg.user_email || "-"}
                      </td>
                      <td className="py-4 px-2 text-gray-700">
                        {msg.phone || msg.user_phone || "-"}
                      </td>
                      <td className="py-4 px-2">
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium ${
                            (msg.status || "new") === "read"
                              ? "bg-green-50 text-green-600"
                              : "bg-red-50 text-red-600"
                          }`}
                        >
                          {msg.status || "new"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <div className="bg-white/80 backdrop-blur-xl rounded-[32px] border border-white/40 shadow-[0_10px_40px_rgba(0,0,0,0.08)] p-6">
          <h2 className="text-2xl font-bold text-[#111827] mb-6">
            Quick Performance
          </h2>

          <div className="space-y-5">
            <div className="rounded-2xl border p-5 bg-white shadow-sm">
              <p className="text-sm text-gray-500 mb-2">Response Efficiency</p>
              <h3 className="text-2xl font-bold text-[#111827]">
                {overview.readRate >= 60 ? "Strong" : "Needs Attention"}
              </h3>
              <p className="text-sm text-gray-500 mt-2">
                Based on current read vs unread message ratio.
              </p>
            </div>

            <div className="rounded-2xl border p-5 bg-white shadow-sm">
              <p className="text-sm text-gray-500 mb-2">Today’s Inquiries</p>
              <h3 className="text-2xl font-bold text-[#111827]">
                {overview.todayMessages}
              </h3>
              <p className="text-sm text-gray-500 mt-2">
                Messages received today across the website.
              </p>
            </div>

            <div className="rounded-2xl border p-5 bg-white shadow-sm">
              <p className="text-sm text-gray-500 mb-2">Monthly Progress</p>
              <h3 className="text-2xl font-bold text-[#111827]">
                {overview.monthlyCount}/{overview.target}
              </h3>
              <p className="text-sm text-gray-500 mt-2">
                Current performance against the target.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white/80 backdrop-blur-xl rounded-[32px] border border-white/40 shadow-[0_10px_40px_rgba(0,0,0,0.08)] p-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl font-bold text-[#111827]">
              Activity Highlights
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              Executive summary for the current dashboard state
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="rounded-2xl border p-5 bg-gradient-to-br from-white to-red-50">
            <p className="text-sm text-gray-500 mb-2">Operational Status</p>
            <h3 className="text-xl font-bold text-green-600">Running</h3>
            <p className="text-sm text-gray-500 mt-2">
              Dashboard services and database activity are active.
            </p>
          </div>

          <div className="rounded-2xl border p-5 bg-gradient-to-br from-white to-orange-50">
            <p className="text-sm text-gray-500 mb-2">Attention Needed</p>
            <h3 className="text-xl font-bold text-[#111827]">
              {overview.unreadMessages} Pending
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              Messages still need to be reviewed by the team.
            </p>
          </div>

          <div className="rounded-2xl border p-5 bg-gradient-to-br from-white to-emerald-50">
            <p className="text-sm text-gray-500 mb-2">Processed Volume</p>
            <h3 className="text-xl font-bold text-[#111827]">
              {overview.readMessages} Completed
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              Successfully reviewed and handled inquiries.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;