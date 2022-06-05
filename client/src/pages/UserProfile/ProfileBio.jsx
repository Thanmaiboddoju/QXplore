import React from 'react';

const ProfileBio = (currentProfile) => {
    return (
        <div>
            <div>
                
                {
                    currentProfile?.currentProfile?.tags ? (
                        <>
                            <h4>Tags Watched</h4>
                            {
                                currentProfile?.currentProfile?.tags.map((tag) => (
                                    <p key={tag}>{tag}</p>
                                ))
                            }
                        </>
                    ):(
                        <p>Zero tags watched</p>
                    )

                }
            </div>
            <div>
                {
                    currentProfile?.currentProfile?.about ?(
                        <>
                            <h4>About</h4>
                            <p>{currentProfile?.currentProfile?.about}</p>
                        </>
                    ):(
                        <p>No bio found</p>
                    )
                }
            </div>
        </div>
    );
}

export default ProfileBio;
