import moment from "moment";
import dynamic from "next/dynamic";

import { CountdownClock } from "@/components/CountdownClock";
import { FooterLogo } from "@/components/FooterLogo";
import { GlowLogo } from "@/components/GlowLogo";
import { Newsletter } from "@/components/Newsletter";
import LogoImage from "@/public/Logo.png";

const Canvas = dynamic(async () => {
  const m = await import("@react-three/fiber");
  return m.Canvas;
});

const VaporGrid = dynamic(async () => {
  const m = await import("@/components/VaporGrid");
  return m.VaporGrid;
});

export const IndexPage = (): JSX.Element => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-tr from-blue-600 via-purple-600 to-orange-500 transition-colors duration-1000">
      <body>
        <div className="flex absolute inset-x-0 top-0 justify-center items-center h-2/3 sm:h-3/5">
          <div className="flex-col mt-12 sm:mt-16 md:mt-24 xl:mt-36 ">
            <div className="w-96 max-w-6xl" />
            <GlowLogo src={LogoImage} />
            <CountdownClock
              date={moment(process.env.NEXT_PUBLIC_LAUNCH)}
              // eslint-disable-next-line @typescript-eslint/no-empty-function
              onComplete={() => {}}
            />
            <Newsletter />
            <FooterLogo twitter="https://twitter.com/daoboard" />
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-1/3 sm:h-2/5">
          <Canvas className="w-full h-full ">
            <VaporGrid />
          </Canvas>
        </div>
      </body>
    </div>
  );
};

export default IndexPage;
