import React, { useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useNavigate } from "react-router-dom";

const EventCalendar = ({ events }) => {
  const navigate = useNavigate();

  const handleEventClick = (info) => {
    navigate(`/events/${info.event.id}`);
  };

  const formattedEvents = events.map((e) => ({
    id: e.id,
    title: e.title,
    start: e.date,
    backgroundColor: "#1B5E20",
    borderColor: "#145A24",
    textColor: "white",
  }));

  // Ensure re-render on resize for responsive layout
  useEffect(() => {
    const handleResize = () => window.dispatchEvent(new Event("resize"));
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg overflow-x-auto">
      <div className="w-full min-w-[320px] sm:min-w-0">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={formattedEvents}
          eventClick={handleEventClick}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,dayGridWeek",
          }}
          height="auto"
          aspectRatio={1.35}
          dayMaxEventRows={3}
          views={{
            dayGridMonth: { dayMaxEventRows: 3 },
            dayGridWeek: { dayMaxEventRows: 2 },
          }}
        />
      </div>

      {/* ✅ Responsive Styling (Tailwind Customization) */}
      <style>{`
        /* Calendar Container */
        .fc {
          font-family: 'Inter', sans-serif;
          font-size: 0.9rem;
        }

        /* Header Styling */
        .fc-toolbar-title {
          color: #1B5E20;
          font-weight: 700;
          text-transform: capitalize;
        }

        .fc-button {
          background-color: #1B5E20 !important;
          border: none !important;
          color: white !important;
          padding: 0.4rem 0.8rem !important;
          border-radius: 0.5rem !important;
          transition: background-color 0.3s ease;
        }

        .fc-button:hover {
          background-color: #145A24 !important;
        }

        /* Table Grid */
        .fc-daygrid-day-frame {
          padding: 6px;
          border-radius: 0.5rem;
          transition: background-color 0.2s ease;
        }

        .fc-daygrid-day:hover {
          background-color: #F1F8E9;
        }

        /* Event Card */
        .fc-event {
          background-color: #1B5E20 !important;
          border: none !important;
          border-radius: 0.5rem !important;
          font-weight: 600;
          text-align: center;
          white-space: normal;
          padding: 2px 4px;
        }

        /* Today’s Highlight */
        .fc-day-today {
          background-color: #E8F5E9 !important;
          border-radius: 0.5rem;
        }

        /* Responsive Breakpoints */
        @media (max-width: 768px) {
          .fc-toolbar {
            flex-direction: column;
            gap: 0.75rem;
          }
          .fc-toolbar-chunk {
            text-align: center;
          }
          .fc-toolbar-title {
            font-size: 1.1rem;
          }
        }

        @media (max-width: 480px) {
          .fc-toolbar {
            gap: 0.5rem;
          }
          .fc-button {
            font-size: 0.8rem !important;
            padding: 0.3rem 0.6rem !important;
          }
          .fc-daygrid-day-number {
            font-size: 0.75rem;
          }
          .fc-event {
            font-size: 0.7rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default EventCalendar;
