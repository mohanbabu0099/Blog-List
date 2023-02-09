const BlogItem = props => {
  const {title, description, publishedDate} = props
  return (
    <div className="main-container">
      <div className="header">
        <h1>{title}</h1>
        <p>{publishedDate}</p>
      </div>
      <div>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default BlogItem
