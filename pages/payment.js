import { useRouter } from "next/router";

export default function Payment() {
  const router = useRouter();
  const { type, size } = router.query;

  return (
    <div style={{ color: "#fff", padding: 40 }}>
      <h1>Payment Page</h1>
      <p>Challenge Type: {type}</p>
      <p>Account Size: {size}</p>
    </div>
  );
}
