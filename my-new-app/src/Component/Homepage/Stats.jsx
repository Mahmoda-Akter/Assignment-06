import React from 'react';

const Stats = () => { 
    return (
        <div>
            <div className="stats stats-vertical lg:stats-horizontal shadow w-full bg-violet-500 place-items-center p-10">
                <div className="stat text-white flex-1 text-center place-items-center">
                    <div className="stat-value">50K+</div>
                    <div className="stat-desc text-amber-50">Active Users</div>
                </div>

                <div className="stat text-white flex-1 text-center place-items-center">
                    <div className="stat-value">200+</div>
                    <div className="stat-desc text-amber-50">Premium Tools</div>
                </div>

                <div className="stat text-white flex-1 text-center place-items-center">
                    <div className="stat-value">4.9</div>
                    <div className="stat-desc text-amber-50">Rating</div>
                </div>
            </div>
        </div>
    );
};

export default Stats;