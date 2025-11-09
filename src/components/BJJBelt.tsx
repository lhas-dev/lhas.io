import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function BJJBelt() {
  return (
    <TooltipProvider delayDuration={200}>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="cursor-pointer hover:scale-110 transition-transform duration-200">
            <svg
              width="64"
              height="24"
              viewBox="0 0 64 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ imageRendering: 'pixelated' }}
            >
              {/* Main purple belt body */}
              <rect x="0" y="6" width="64" height="12" fill="#7C3AED" />

              {/* Black outline - top */}
              <rect x="0" y="5" width="64" height="1" fill="#000000" />
              {/* Black outline - bottom */}
              <rect x="0" y="18" width="64" height="1" fill="#000000" />

              {/* Left end detail */}
              <rect x="0" y="6" width="4" height="12" fill="#6B21A8" />

              {/* Right end detail - darker purple */}
              <rect x="60" y="6" width="4" height="12" fill="#6B21A8" />

              {/* First white stripe */}
              <rect x="54" y="7" width="2" height="10" fill="#FFFFFF" />
              {/* Stripe outline */}
              <rect x="53" y="7" width="1" height="10" fill="#000000" />
              <rect x="56" y="7" width="1" height="10" fill="#000000" />

              {/* Second white stripe */}
              <rect x="49" y="7" width="2" height="10" fill="#FFFFFF" />
              {/* Stripe outline */}
              <rect x="48" y="7" width="1" height="10" fill="#000000" />
              <rect x="51" y="7" width="1" height="10" fill="#000000" />

              {/* Knot on left side */}
              <rect x="2" y="8" width="4" height="8" fill="#8B5CF6" />
              <rect x="1" y="9" width="1" height="6" fill="#000000" />
              <rect x="6" y="9" width="1" height="6" fill="#000000" />

              {/* Belt texture - small highlights */}
              <rect x="12" y="8" width="1" height="1" fill="#A78BFA" opacity="0.6" />
              <rect x="20" y="14" width="1" height="1" fill="#A78BFA" opacity="0.6" />
              <rect x="28" y="10" width="1" height="1" fill="#A78BFA" opacity="0.6" />
              <rect x="36" y="15" width="1" height="1" fill="#A78BFA" opacity="0.6" />
            </svg>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>I love martial arts and I'm a Brazilian Jiu-jitsu Purple Belt!</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
