const Welcome = (props) => {
    console.log(props);
    return (
      <div>
        <p> 안녕하세요 {props.username} 님! {props.age} 세 입니다.
        </p>
      </div>
    );
};

export default Welcome; // 웹에서 참조