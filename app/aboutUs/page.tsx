import Image from "next/image";
import { team } from "@/middleware/data";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-8">About Us</h1>
      <div className="flex flex-wrap justify-center">
        {team.map((member, index) => (
          <div
            key={index}
            className="max-w-sm rounded overflow-hidden shadow-lg m-4"
          >
            <Image
              className="object-cover rounded-lg"
              src={member.image}
              width={400}
              height={800}
              alt={member.name}
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{member.name}</div>
              <p className="text-gray-700 text-base">{member.role}</p>
              <p className="text-gray-700 text-base">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
