
export default function Home() {
  return (
    <div style={{textAlign:"center", padding:"50px"}}>
      <h1 style={{fontSize:"60px"}}>🍽️</h1>
      <h1>Welcome to My Restaurant</h1>
      <p style={{fontSize:"20px", color:"#666"}}>Hamara khana bohot mazedar hai!</p>
      <div style={{display:"flex", gap:"20px", justifyContent:"center", marginTop:"30px"}}>
        <span style={{fontSize:"30px"}}>🥘</span>
        <span style={{fontSize:"30px"}}>🍛</span>
        <span style={{fontSize:"30px"}}>🥩</span>
        <span style={{fontSize:"30px"}}>🍰</span>
      </div>
    </div>
  );
}
