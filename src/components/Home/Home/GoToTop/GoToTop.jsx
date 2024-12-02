
const GoToTop = () => {
    const goToBtn = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
    return (
        <div>
            <button className='top-btn' onClick={goToBtn}> ttt</button>
           
        </div>
    );
};

export default GoToTop;