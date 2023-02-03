import { useState } from 'react';
import Button from '../../../Button';

function Follow() {
    const [follow, setFollow] = useState(false);
    return (
        <div
            onClick={() => {
                setFollow(!follow);
            }}
        >
            {(follow && <Button small>Following</Button>) || (
                <Button small outline>
                    Follow
                </Button>
            )}
        </div>
    );
}

export default Follow;
