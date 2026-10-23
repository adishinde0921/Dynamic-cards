import React from "react";

function card(){
    return(
        <div className = "main">
            <div className = "card">
                <div className="top">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMZKPlCCc9qrsWdDaKQDrzQ1rV4fzMZAHbhjB7AlPp8w&s" alt="" />
                    <button>Save</button>
                </div>
                <div className="middle">
                    <h3>Amzon <span>5 Days ago</span></h3>
                    <h2>Seniour UI/UX Designer</h2>
                    <div className="tag">
                    <h4>Part Time</h4>
                    <h4>Seniour Level</h4>
                </div>
                </div>
                
                <div className="bottom">
                    <div>
                        <div><h3>$120/hr</h3>
                        <p>
                            Mumbai, India</p></div>
                    </div>
                    
                        <button>Apply Now</button>
                    

                </div>

            </div>

        </div>
    )
}
export default card;