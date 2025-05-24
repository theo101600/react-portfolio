import styled from "styled-components";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const StyledContact = styled.div`
  padding: 3rem 5rem;
  height: 100%;
  overflow: scroll;
  p {
    font-family: "Roboto", sans-serif;
    font-weight: 200;
    font-size: 18px;
  }
  h1 {
    margin-top: 2rem;
    font-family: "Ubuntu", sans-serif;
    font-weight: 500;
    font-style: normal;
    font-size: 30px;
  }
  .leaflet-container {
    height: 400px;
    width: 100%;
    margin: 2rem 0;
    border-radius: 10px;
    overflow: hidden;
  }
`;

function Contact() {
  return (
    <StyledContact>
      <h1>Contact</h1>

      <MapContainer
        center={[14.5995, 120.9842]}
        zoom={10}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[14.5995, 120.9842]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>

      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
        dolorem quod quis vel hic. Debitis, voluptas laborum explicabo cumque
        natus perspiciatis autem quas qui omnis odio aperiam corporis dolorem
        cupiditate! Minus aliquid ea necessitatibus dolores eaque voluptates,
        explicabo vel facilis quisquam quos, assumenda sit corrupti, ullam hic
        incidunt magni amet temporibus harum dolorum cum. Aliquam fugiat
        inventore necessitatibus obcaecati. Debitis. Quod odio accusamus error
        in, dolor deleniti corrupti sapiente aperiam iste, placeat nobis
        repudiandae nisi! Eaque, saepe ratione. Nulla impedit in numquam
        voluptas quidem modi odio culpa suscipit atque qui? At maiores sint
        sequi quibusdam, suscipit impedit iure eaque aperiam reprehenderit
        laboriosam reiciendis blanditiis soluta expedita tempore, necessitatibus
        sapiente praesentium et deserunt unde, saepe tenetur odio consequatur
        laudantium harum? Eum? Repellat eaque ad corrupti facere ipsum veniam
        neque numquam soluta, ea molestiae fuga rerum architecto placeat quod
        nostrum libero eligendi dolor illo laborum eum id hic? Incidunt enim
        veniam voluptas.
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
        dolorem quod quis vel hic. Debitis, voluptas laborum explicabo cumque
        natus perspiciatis autem quas qui omnis odio aperiam corporis dolorem
        cupiditate! Minus aliquid ea necessitatibus dolores eaque voluptates,
        explicabo vel facilis quisquam quos, assumenda sit corrupti, ullam hic
        incidunt magni amet temporibus harum dolorum cum. Aliquam fugiat
        inventore necessitatibus obcaecati. Debitis. Quod odio accusamus error
        in, dolor deleniti corrupti sapiente aperiam iste, placeat nobis
        repudiandae nisi! Eaque, saepe ratione. Nulla impedit in numquam
        voluptas quidem modi odio culpa suscipit atque qui? At maiores sint
        sequi quibusdam, suscipit impedit iure eaque aperiam reprehenderit
        laboriosam reiciendis blanditiis soluta expedita tempore, necessitatibus
        sapiente praesentium et deserunt unde, saepe tenetur odio consequatur
        laudantium harum? Eum? Repellat eaque ad corrupti facere ipsum veniam
        neque numquam soluta, ea molestiae fuga rerum architecto placeat quod
        nostrum libero eligendi dolor illo laborum eum id hic? Incidunt enim
        veniam voluptas.
      </p>
    </StyledContact>
  );
}

export default Contact;
