import React, { useEffect, useState } from "react";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebase";

function Messages() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMessages = async () => {
    try {
      const q = query(collection(db, "messages"), orderBy("createdAt", "desc"));
      const querySnapshot = await getDocs(q);

      const data = querySnapshot.docs.map((docSnap) => ({
        id: docSnap.id,
        ...docSnap.data(),
      }));

      setMessages(data);
    } catch (error) {
      console.log("Error fetching messages:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "messages", id));
      setMessages((prev) => prev.filter((msg) => msg.id !== id));
    } catch (error) {
      console.log("Delete error:", error);
    }
  };

  const markAsRead = async (id) => {
    try {
      await updateDoc(doc(db, "messages", id), {
        status: "read",
      });

      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === id ? { ...msg, status: "read" } : msg
        )
      );
    } catch (error) {
      console.log("Update error:", error);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-[#111827]">Messages</h2>
        <span className="bg-red-50 text-red-600 px-4 py-2 rounded-lg text-sm font-medium">
          Total: {messages.length}
        </span>
      </div>

      {loading ? (
        <div className="text-gray-500">Loading messages...</div>
      ) : messages.length === 0 ? (
        <div className="text-gray-500">No messages found.</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b text-gray-500 text-sm">
                <th className="py-3 px-2">Name</th>
                <th className="py-3 px-2">Email</th>
                <th className="py-3 px-2">Phone</th>
                <th className="py-3 px-2">Message</th>
                <th className="py-3 px-2">Status</th>
                <th className="py-3 px-2">Date</th>
                <th className="py-3 px-2">Actions</th>
              </tr>
            </thead>

            <tbody>
              {messages.map((msg) => (
                <tr key={msg.id} className="border-b align-top">
                  <td className="py-4 px-2 text-gray-700 font-medium">
                    {msg.name || msg.user_name || "-"}
                  </td>

                  <td className="py-4 px-2 text-gray-700">
                    {msg.email || msg.user_email || "-"}
                  </td>

                  <td className="py-4 px-2 text-gray-700">
                    {msg.phone || msg.user_phone || "-"}
                  </td>

                  <td className="py-4 px-2 text-gray-700 max-w-[320px] whitespace-pre-wrap">
                    {msg.message || "-"}
                  </td>

                  <td className="py-4 px-2">
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        (msg.status || "new") === "read"
                          ? "bg-green-50 text-green-600"
                          : "bg-red-50 text-red-600"
                      }`}
                    >
                      {msg.status || "new"}
                    </span>
                  </td>

                  <td className="py-4 px-2 text-gray-500 text-sm">
                    {msg.createdAt?.seconds
                      ? new Date(msg.createdAt.seconds * 1000).toLocaleString()
                      : "-"}
                  </td>

                  <td className="py-4 px-2">
                    <div className="flex flex-col gap-2">
                      {(msg.status || "new") !== "read" && (
                        <button
                          onClick={() => markAsRead(msg.id)}
                          className="bg-green-600 text-white px-3 py-1 rounded text-sm"
                        >
                          Mark Read
                        </button>
                      )}

                      <button
                        onClick={() => handleDelete(msg.id)}
                        className="bg-red-600 text-white px-3 py-1 rounded text-sm"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Messages;