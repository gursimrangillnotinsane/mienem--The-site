
const goodreads = () => {
    return (
        <>

            <div id="gr_updates_widget">
                <iframe sandbox="" id="the_iframe" src="https://goodreads.com/widgets/user_update_widget?height=200&num_updates=3&user=182786831&" height="130" frameBorder="0"></iframe>
                <div id="gr_footer">
                    <a href="https://www.goodreads.com/"><img alt="Goodreads: Book reviews, recommendations, and discussion" src="https://s.gr-assets.com/images/layout/goodreads_logo_140.png" /></a>
                </div>
            </div>

        </>
    )
}
export default goodreads;