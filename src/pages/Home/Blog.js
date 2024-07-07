import React from 'react';


const Blog = () => {
    return (
        <div class="container text-center w-50 card-body">
            <h2
                class="card-title text-5xl text-red-600 mb-10 mx-auto">Blog</h2>
            <div className='grid sm:grid-cols-1 lg:grid-cols-3 lg:pl-0  sm:pl-5 lg:ml-48'>
                <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Best practices for programming</h5>
                    <p class="font-normal text-gray-700 dark:text-gray-400">Use meaningful variable and function names.
                        Follow consistent naming conventions.
                        Indent code properly.
                        Write comments and documentation where necessary.</p>
                </a>
                <a href="#" class="block gap-5 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Tips for Success</h5>
                    <p class="font-normal text-gray-700 dark:text-gray-400">
Consistency: Stick to a regular posting schedule.
Quality: Focus on writing high-quality, valuable content.
Engagement: Interact with your readers and build a community.
</p>
                </a>
                <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">How to clear a concept</h5>
                    <p class="font-normal text-gray-700 dark:text-gray-400">
                    To clear a concept, break it down into simpler components. Start by understanding the basics and then build on them. Use multiple resources like books, videos, and articles. Practice applying the concept through exercises or real-life examples.
</p>
                </a>
            </div>
        </div>
    );
};

export default Blog;