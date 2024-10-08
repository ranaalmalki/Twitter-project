import React, { useEffect, useState } from 'react';
import axios from 'axios';

function LikesPage({ user }) {
    const [likedTweets, setLikedTweets] = useState([]);

    useEffect(() => {
        axios.get(`https://66e7e69bb17821a9d9da6eb2.mockapi.io/comment?username=${user}`)
            .then(res => {
                const tweetsWithLikes = res.data.filter(tweet => tweet.likes > 0);
                setLikedTweets(tweetsWithLikes);
            })
            .catch(error => console.error('Error fetching liked tweets:', error));
    }, [user]);

    return (
        <div className="likes-page">
            <h1 className="text-2xl font-bold">الإعجابات</h1>
            {likedTweets.length === 0 ? (
                <p>لا توجد إعجابات.</p>
            ) : (
                <ul>
                    {likedTweets.map(tweet => (
                        <li key={tweet.id}>
                            <p>{tweet.tweet}</p>
                            <p>الإعجابات: {tweet.likes}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default LikesPage;
