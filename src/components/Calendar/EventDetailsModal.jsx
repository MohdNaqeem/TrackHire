import {
  RiBriefcaseLine,
  RiCalendarLine,
  RiTimeLine,
  RiCloseLine,
  RiMapPinLine,
} from "react-icons/ri";

const EventDetailsModal = ({
  event,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/40 p-3 sm:p-4">
      {/* Modal */}
      <div className="my-auto w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-start justify-between border-b border-[#ECECF3] p-4 sm:p-6">
          <div className="min-w-0 pr-3">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-[#3CBFA4] sm:text-xs">
              {event.type}
            </p>

            <h2 className="mt-1 break-words text-xl font-bold text-[#211A52] sm:text-2xl">
              {event.title}
            </h2>

            <p className="mt-1 break-words text-sm text-[#8A86A3]">
              {event.company}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close event details"
            className="shrink-0 rounded-xl p-2 text-[#8A86A3] transition hover:bg-[#F5F6FA] hover:text-[#211A52]"
          >
            <RiCloseLine size={21} />
          </button>
        </div>

        {/* Event Details */}
        <div className="space-y-3 p-4 sm:space-y-4 sm:p-6">
          {/* Date */}
          <div className="flex items-center gap-3 rounded-2xl bg-[#FAFAFC] p-3 sm:gap-4 sm:p-4">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#ECFBF8] sm:h-10 sm:w-10">
              <RiCalendarLine
                size={18}
                className="text-[#3CBFA4]"
              />
            </div>

            <div className="min-w-0">
              <p className="text-xs text-[#8A86A3]">
                Date
              </p>

              <p className="break-words text-sm font-semibold text-[#211A52] sm:text-base">
                {event.date}
              </p>
            </div>
          </div>

          {/* Time */}
          <div className="flex items-center gap-3 rounded-2xl bg-[#FAFAFC] p-3 sm:gap-4 sm:p-4">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#ECFBF8] sm:h-10 sm:w-10">
              <RiTimeLine
                size={18}
                className="text-[#3CBFA4]"
              />
            </div>

            <div className="min-w-0">
              <p className="text-xs text-[#8A86A3]">
                Time
              </p>

              <p className="break-words text-sm font-semibold text-[#211A52] sm:text-base">
                {event.time}
              </p>
            </div>
          </div>

          {/* Mode */}
          <div className="flex items-center gap-3 rounded-2xl bg-[#FAFAFC] p-3 sm:gap-4 sm:p-4">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#ECFBF8] sm:h-10 sm:w-10">
              <RiMapPinLine
                size={18}
                className="text-[#3CBFA4]"
              />
            </div>

            <div className="min-w-0">
              <p className="text-xs text-[#8A86A3]">
                Mode
              </p>

              <p className="break-words text-sm font-semibold text-[#211A52] sm:text-base">
                {event.mode}
              </p>
            </div>
          </div>

          {/* Company */}
          <div className="flex items-center gap-3 rounded-2xl bg-[#FAFAFC] p-3 sm:gap-4 sm:p-4">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#ECFBF8] sm:h-10 sm:w-10">
              <RiBriefcaseLine
                size={18}
                className="text-[#3CBFA4]"
              />
            </div>

            <div className="min-w-0">
              <p className="text-xs text-[#8A86A3]">
                Company
              </p>

              <p className="break-words text-sm font-semibold text-[#211A52] sm:text-base">
                {event.company}
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-[#ECECF3] p-4 sm:p-6">
          <button
            type="button"
            onClick={onClose}
            className="w-full rounded-xl bg-[#211A52] py-3 text-sm font-semibold text-white transition hover:bg-[#2D2568]"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventDetailsModal;