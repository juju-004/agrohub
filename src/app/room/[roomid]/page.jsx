"use client";

import { useContext, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { v4 as uuid } from "uuid";
import { Context } from "@/hooks/UserContext";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const Room = ({ params }) => {
  const { user } = useContext(Context);
  const roomID = params.roomid;
  const router = useRouter();
  const meetingRef = useRef(null);

  useEffect(() => {
    if (user && meetingRef.current) {
      const setupMeeting = async () => {
        // Generate Kit Token
        const appID = parseInt(process.env.NEXT_PUBLIC_ZEGO_APP_ID, 10);
        const serverSecret = process.env.NEXT_PUBLIC_ZEGO_SERVER_SECRET;
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
          appID,
          serverSecret,
          roomID,
          uuid(),
          user,
          720
        );

        // Create instance object from Kit Token.
        const zp = ZegoUIKitPrebuilt.create(kitToken);

        // Start the call
        zp.joinRoom({
          container: meetingRef.current,
          sharedLinks: [
            {
              name: "Shareable link",
              url: `${window.location.protocol}//${window.location.host}${window.location.pathname}?roomID=${roomID}`,
            },
          ],
          scenario: {
            mode: ZegoUIKitPrebuilt.VideoConference,
          },
          maxUsers: 10,
        });
      };

      setupMeeting();
    } else {
      router.push("/");
    }
  }, [user, roomID, router]);

  return <div className="w-full h-screen bg-white" ref={meetingRef}></div>;
};

export default Room;
