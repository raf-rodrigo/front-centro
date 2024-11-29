import {Carousel} from "react-bootstrap";

export default function Carrosel({ img_1, img_2, img_3, title_1, title_2, title_3, content_1, content_2, content_3 }) {
    return (
        <div className="w-75">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img_1}
                        alt={img_1}
                    />
                    <Carousel.Caption>
                        <h5>{title_1}</h5>
                        <p>
                            {content_1}
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img_2}
                        alt={img_2}
                    />
                    <Carousel.Caption>
                        <h5>{title_2}</h5>
                        <p>
                            {content_2}
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img_3}
                        alt={img_3}
                    />
                    <Carousel.Caption>
                        <h5>{title_3}</h5>
                        <p>
                            {content_3}
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}