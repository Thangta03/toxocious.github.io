import './share_links.scss';

export const ShareLinks = ({
  twitter = true,
  linkedin = true,
  title = '',
  description = '',
  hashtags = '',
}: {
  twitter: boolean;
  linkedin: boolean;
  title: string;
  description: string;
  hashtags?: string;
}) => {
  return (
    <div className='share_links'>
      {twitter && (
        <a
          className='button'
          target='_blank'
          rel='noopener'
          title='Share On Twitter'
          href={`http://twitter.com/share?text=${encodeURIComponent(
            description
          )}&url=${encodeURIComponent(
            window.location.href
          )}&hashtags=${encodeURIComponent(hashtags)}`}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            aria-hidden='true'
            focusable='false'
            role='none'
          >
            <path opacity='0' d='M0 0h24v24H0z'></path>
            <path d='M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z'></path>
          </svg>
        </a>
      )}

      {linkedin && (
        <a
          className='button'
          target='_blank'
          rel='noopener'
          title='Share On LinkedIn'
          href={`https://www.linkedin.com/shareArticle?mini=true&title=${encodeURIComponent(
            title
          )}&url=${encodeURIComponent(window.location.href)}`}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
          >
            <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
          </svg>
        </a>
      )}
    </div>
  );
};