'use strict'

function LikeButton() {
    const [like, setLike] = React.useState(false);

    if (like) {
        return React.createElement(
            'button',
            {
                onClick: () => setLike(false)
            },
            'unlike'
        );
    }

    return React.createElement(
        'button',
        {
            onClick: () => setLike(true)
        },
        'like'
    );
}

const documentContainer = document.getElementById("component");
ReactDOM.render(React.createElement(LikeButton), documentContainer);