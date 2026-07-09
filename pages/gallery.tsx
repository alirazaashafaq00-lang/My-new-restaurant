
export default function Gallery() {
  const images = [
    { id: 1, emoji: "🍽️", name: "Signature Dish" },
    { id: 2, emoji: "🏛️", name: "Restaurant Interior" },
    { id: 3, emoji: "👨‍🍳", name: "Chef Special" },
    { id: 4, emoji: "🌳", name: "Outdoor Seating" },
    { id: 5, emoji: "🍰", name: "Dessert Platter" },
    { id: 6, emoji: "✨", name: "Private Dining" },
  ];

  return (
    <div style={{textAlign:"center", padding:"50px"}}>
      <h1 style={{fontSize:"40px"}}>🖼️ Gallery</h1>
      <div style={{display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:"20px", maxWidth:"800px", margin:"30px auto"}}>
        {images.map((img) => (
          <div key={img.id} style={{background:"white", padding:"30px", borderRadius:"10px", boxShadow:"0 2px 10px rgba(0,0,0,0.1)"}}>
            <div style={{fontSize:"50px"}}>{img.emoji}</div>
            <p style={{fontWeight:"bold"}}>{img.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
