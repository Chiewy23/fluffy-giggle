import React from "react";

const RobotPage = (props) => {
    const { name, email, id }  = props;

    return (
        <article class="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
            <div class="tc">
                <img alt="robot" src={ `https://robohash.org/${id}?200x200` } />
                <h1 class="f4">{ name }</h1>
                <h1 class="f5">{ email }</h1>
                <hr class="mw3 bb bw1 b--black-10"/>
            </div>
            <p class="lh-copy measure center f6 black-70">
                Quite affectionate and outgoing.
                She loves to get chin scratches and will
                roll around on the floor waiting for you give her more of them.
            </p>
        </article>
    );
}

export default RobotPage;