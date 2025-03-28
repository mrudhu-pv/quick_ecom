import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const imageStyle ={
    borderRadius: '50%',
    border:'1px,solid #fff',
  }
  return (
    
      <div>
      <Link href="/products" prefetch={false}>Go to products</Link>
      <div>
        <Image style={imageStyle} src='/download.jpeg' alt="" width={300} height={300}/>
        <Image style={imageStyle} src='/download.jpeg' alt="" width={300} height={300}/>
      </div>
      </div>
  );
}
