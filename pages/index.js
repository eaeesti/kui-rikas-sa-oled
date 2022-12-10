import Calculator from "../components/Calculator";
import { fetchEvaluations } from "../utils/impact";

export default function Home({ evaluations }) {
  return (
    <div className="bg-slate-200">
      <Calculator evaluations={evaluations} />
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      evaluations: await fetchEvaluations(),
    },
  };
}
