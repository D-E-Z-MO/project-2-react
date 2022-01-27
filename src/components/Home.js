import { Balance } from "./Balance";

export function Home({ balance }) {
  return (
    <div>
      <Balance balance={balance} />
    </div>
  );
}
