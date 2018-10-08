import React from "react";
import Carousel from "../carousel/carousel";
import CarouselItem from "../carousel-item/carousel-item";
import { connect } from "react-redux";
import { fetchCarouselData } from "../../actions/action";
import { bindActionCreators } from "redux";

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      carouselItems: []
    };
  }

  componentDidMount() {
    this.props.fetchCarouselData();
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      carouselItems: newProps.carouselItems,
      isError: newProps.isError
    });
  }

  render() {
    var carouselConfig = {
      autoplay: true,
      interval: 1000
    };
    return (
      <section>
        <Carousel {...carouselConfig}>
          {this.state.carouselItems.map(carouselItem => (
            <CarouselItem
              imagePath={carouselItem.webformatURL}
              title={carouselItem.tags}
            />
          ))}
          {this.state.isError && <p>Error loading carousel items.</p>}
        </Carousel>
      </section>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchCarouselData }, dispatch);
};

const mapStateToProps = state => {
  return { carouselItems: state.carouselData, isError: state.isError };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
