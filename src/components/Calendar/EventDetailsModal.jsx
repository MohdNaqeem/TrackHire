import {
  RiBriefcaseLine,
  RiCalendarLine,
  RiTimeLine,
  RiCloseLine,
  RiMapPinLine,
} from "react-icons/ri";

const EventDetailsModal = ({ event, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      {/* Modal */}
      <div className="w-full max-w-md rounded-3xl bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-start justify-between border-b border-[#ECECF3] p-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#3CBFA4]">
              {event.type}
            </p>

            <h2 className="mt-1 text-2xl font-bold text-[#211A52]">
              {event.title}
            </h2>

            <p className="mt-1 text-sm text-[#8A86A3]">
              {event.company}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-xl p-2 text-[#8A86A3] transition hover:bg-[#F5F6FA] hover:text-[#211A52]"
          >
            <RiCloseLine size={22} />
          </button>
        </div>

        {/* Event Details */}
        <div className="space-y-4 p-6">
          {/* Date */}
          <div className="flex items-center gap-4 rounded-2xl bg-[#FAFAFC] p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#ECFBF8]">
              <RiCalendarLine
                size={19}
                className="text-[#3CBFA4]"
              />
            </div>

            <div>
              <p className="text-xs text-[#8A86A3]">
                Date
              </p>

              <p className="font-semibold text-[#211A52]">
                {event.date}
              </p>
            </div>
          </div>

          {/* Time */}
          <div className="flex items-center gap-4 rounded-2xl bg-[#FAFAFC] p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#ECFBF8]">
              <RiTimeLine
                size={19}
                className="text-[#3CBFA4]"
              />
            </div>

            <div>
              <p className="text-xs text-[#8A86A3]">
                Time
              </p>

              <p className="font-semibold text-[#211A52]">
                {event.time}
              </p>
            </div>
          </div>

          {/* Mode */}
          <div className="flex items-center gap-4 rounded-2xl bg-[#FAFAFC] p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#ECFBF8]">
              <RiMapPinLine
                size={19}
                className="text-[#3CBFA4]"
              />
            </div>

            <div>
              <p className="text-xs text-[#8A86A3]">
                Mode
              </p>

              <p className="font-semibold text-[#211A52]">
                {event.mode}
              </p>
            </div>
          </div>

          {/* Company */}
          <div className="flex items-center gap-4 rounded-2xl bg-[#FAFAFC] p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#ECFBF8]">
              <RiBriefcaseLine
                size={19}
                className="text-[#3CBFA4]"
              />
            </div>

            <div>
              <p className="text-xs text-[#8A86A3]">
                Company
              </p>

              <p className="font-semibold text-[#211A52]">
                {event.company}
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-[#ECECF3] p-6">
          <button
            type="button"
            onClick={onClose}
            className="w-full rounded-xl bg-[#211A52] py-3 font-semibold text-white transition hover:bg-[#2D2568]"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventDetailsModal;