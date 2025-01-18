import getQuestions from "@/hooks/getQuestions";

export default async function Home() {
  return <div className="">{JSON.stringify(questions)}</div>;
}
