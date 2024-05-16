// @ts-ignore
import Dropzone from "@/components/dropZone";

export default function Home() {
  return (
    <div className="space-y-16 pb-8">
      <div className="space-y-6">
        <h1 className="text-3xl md:text-5xl font-medium text-center">
          Your Free Online File Converter
        </h1>
        <p className="text-muted-foreground text-base md:text-lg text-center md:px-24 xl:px-44 2xl:px-52">
          Effortlessly convert your files between various formats with
          FileChameleon. Our free online tool supports a wide range of images,
          audio, and videos. Transform your content without restrictions and get
          the most out of your files. Start converting today!
        </p>
      </div>
      <Dropzone />
    </div>
  );
}
