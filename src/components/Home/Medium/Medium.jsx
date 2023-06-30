
const Medium = () => {
    return (
        <div className="p-8">
            <div className="text-2xl">
                <div className="card pt-6">
                    <div className="card-body bg-[#161616] rounded-3xl">
                        <h5 className="font-bold text-3xl mb-16">Real/Browser Dom, Virtual Dom, Diff algorithm</h5>

                        <p className="text-xl">
                            <p className="font-bold text-2xl"> What is DOM? or What is Real/Browser DOM?</p>
                            DOM stands for Document Object Model it is the structural representation of all nodes in an HTML document DOM represents the Ul of your applications. DOM manipulation is required to dynamically change the content of a web page. With every change, the DOM gets manipulated and re-rendered to update the application UI, which affects the performance and makes it slower. DOM is an interface that allows the script to update the content, style, and structure of the document.
                            <br /> <br />

                            <p className="font-bold text-2xl">What is React’s Virtual DOM?</p>
                            To make the performance of the Real DOM better and faster, the concept of Virtual DOM arrives. The Virtual DOM is nothing but the virtual representation of the DOM. A virtual DOM object is the same as a real DOM object, except that it is a lightweight copy. This means that it cannot manipulate on-screen elements. Moreover, upon any change of a property, it only updates the corresponding nodes and not the entire tree. That makes it a quick and efficient alternative. <br /> <br />

                            <h1 className="text-2xl font-bold">If Document Object Model (DOM)So cool. Then why go with virtual DOM🤔?</h1> <br />
                            <b>Consider a situation- </b><br />

                            1. Decorate the room with 100 balloons and you have done. <br />
                            2. Now I have a condition that the colour of each ballons should be red. So you remove all the balloons and now decorate the room with red balloons. <br />
                            3. Now I have set a new condition that changes ballons no 90 with a blue-coloured ballon. Now you remove all balloons and bring 99 red balloons and 1 blue balloon and paint accordingly. <br />
                            4. I am again asking you to change balloon no 80 to green. You remove all the balloons. Go market and bring 98 red, 1 blue and 1 green. And decorate the room accordingly. <br />
                            5. Wow, will you work this way? No. right? but your Document Object Model does. So, how to make Dom intelligent? Now, VIRTUAL DOM comes to rescue us. <br /> <br />
                            <a href="https://medium.com/@akasdatta/real-browser-dom-virtual-dom-diff-algorithm-b862838f3a65" className="btn btn-outline inline-block pt-3.5 text-left">Read more</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Medium;