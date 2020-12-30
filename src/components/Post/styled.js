import styled from 'styled-components'
import media from "styled-media-query"

export const PostWrapper = styled.section`
  margin: auto;
  padding: 0 10rem;
  max-width: 80rem;
`

export const PostTitle = styled.h1`
  font-weight: 900;
  font-size: 3.75rem;
  color: var(--blueStrDark);
`

export const PostArticle = styled.section`
  margin: 4rem 5rem;
`

export const PostContent = styled.div`
  background-color: var(--base);
  border-radius: 25px;
  box-shadow: 0px 0px 5px var(--light);
  padding: 2rem;

  p,
  h1,
  h2,
  h3,
  h4,
  ul,
  ol,
  .tags,
  iframe,
  .button-post {
    color: #4a5568;
    font-size: 1.3rem;
    font-weight: 600;
    line-height: 1.4;
    letter-spacing: 0.069rem;
    padding: 0 2rem;
    ${media.lessThan("large")`
      padding: 0 1rem;
      word-break: break-word;
    `}
  }
  p {
    margin: 0 auto 1.6rem;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    color: var(--blueStrDark);
    margin: 2.4rem auto 1rem;
  }
  ul,
  ol {  
    list-style: circle;
    padding-left: 2.5rem;
    margin: 0 auto 1.6rem 0.8rem;
  }
  li {
    padding: 0.625rem 0;
    & > ul {
      margin-bottom: 0;
    }
  }
  p,
  li {
    code {
      word-wrap: break-word;
    }
  }
  img {
    display: block;
    max-width: 100%;
  }
  iframe {
    padding: 0 1.6rem 1.6rem;
    width: 100%;
    ${media.lessThan("large")`
      padding: 0 1rem;
    `}
  }
  blockquote {
    color: var(--postColor);
    border-left: 0.3rem solid var(--highlight);
    padding: 0 1.875rem;
    margin: 3.125rem auto;
  }
  hr {
    border: 1px solid var(--borders);
    margin: 3rem auto;
  }
  #twitter-widget-0,
  .instagram-media,
  .twitter-tweet {
    margin: 20px auto !important;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 800;
    line-height: 1.4;
  }
  h1 {
    font-size: 2.8rem;
    ${media.lessThan("large")`
      font-size: 1.875rem;
    `}
  }
  h2 {
    font-size: 2.1rem;
    ${media.lessThan("large")`
      font-size: 1.375rem;
    `}
  }
  h3 {
    font-size: 1.6rem;
    ${media.lessThan("large")`
      font-size: 1.125rem;
    `}
  }
  h4 {
    font-size: 1.4rem;
  }
  h5 {
    font-size: 1.2rem;
  }
  strong {
    font-weight: 700;
  }
  .gatsby-resp-image-background-image {
    z-index: 2;
    opacity: 1 !important;
  }
  .gatsby-resp-image-image {
    box-shadow: none !important;
    transition: opacity 0.2s;
    &.lazyload {
      opacity: 0;
    }
    &.lazyloaded {
      opacity: 1;
      z-index: 3;
    }
  }
  .gatsby-highlight {
    padding: 0 1.6rem 1.6rem;
    ${media.lessThan("large")`
      padding: 0;
    `}
  }
  .instagram-media {
    margin: 1rem auto !important;
  }
  a {
    border-bottom: 1px dashed var(--highlight);
    color: var(--highlight);
    text-decoration: none;
    transition: opacity 0.5s;
    svg {
      color: var(--postColor);
    }
    &:hover {
      opacity: 0.8;
    }
  }
`
