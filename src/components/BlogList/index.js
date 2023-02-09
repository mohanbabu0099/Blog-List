import BlogItem from '../BlogItem'

const BlogList = props => {
  const {blogsData} = props
  const {title, description, publishedDate} = blogsData
  return (
    <div>
      <BlogItem
        title={title}
        description={description}
        publishedDate={publishedDate}
      />
    </div>
  )
}

export default BlogList
