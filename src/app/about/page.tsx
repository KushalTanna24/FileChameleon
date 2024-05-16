import { Badge } from "@/components/ui/badge";
import React from "react";

const About = () => {
  return (
    <div className="space-y-12 text-md md:text-lg text-muted-foreground pb-4 md:pb-8 text-justify">
      <div className="flex flex-col gap-10">
        <span>
          FileChameleon is a side project aimed at exploring the technologies of{" "}
          <Badge>Next.js 14</Badge>, <Badge>Shadcn</Badge>, and{" "}
          <Badge>FFmpeg-wasm</Badge> (WebAssembly). It serves as a platform to
          showcase the capabilities of these technologies in the context of file
          conversion.
        </span>
        <span>
          <h2 className="text-xl md:text-2xl font-medium text-muted-foreground">
            Effortless File Conversion
          </h2>
          Welcome to FileChameleon, your go-to destination for effortless file
          conversion using FFmpeg WebAssembly. With FileChameleon, you can
          seamlessly convert various file formats directly in your web browser,
          thanks to the power of FFmpeg WebAssembly.
        </span>
      </div>

      <div className="space-y-2">
        <h2 className="text-xl md:text-2xl font-medium text-muted-foreground">
          📁 Supported Formats:
        </h2>
        <p>
          FileChameleon supports a wide range of file formats, including
          documents, images, audio files, and more. Whether it&apos;s MP3, JPG,
          AVI, MP4, or any other format, FileChameleon has you covered.
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="text-xl md:text-2xl font-medium text-muted-foreground">
          🔄 Effortless Conversion:
        </h2>
        <p>
          Experience seamless file conversion with FileChameleon. Convert your
          files quickly and efficiently directly in your web browser, without
          the need for additional software installations.
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="text-xl md:text-2xl font-medium text-muted-foreground">
          ⏱️ Fast and Reliable:
        </h2>
        <p>
          Enjoy fast and reliable conversions with FileChameleon. Thanks to the
          optimized performance of FFmpeg WebAssembly, you can convert your
          files in a fraction of the time, without compromising on quality.
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="text-xl md:text-2xl font-medium text-muted-foreground">
          🔒 Privacy and Security:
        </h2>
        <p>
          Your privacy and security are our top priorities. Rest assured that
          your files are processed directly in your browser and never leave your
          device, ensuring maximum privacy and security.
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="text-xl md:text-2xl font-medium text-muted-foreground">
          🌟 Start Converting with FileChameleon:
        </h2>
        <p>
          Join thousands of users who trust FileChameleon for their file
          conversion needs. Start converting effortlessly today and experience
          the convenience of FFmpeg WebAssembly with FileChameleon.
        </p>
      </div>
    </div>
  );
};

export default About;
