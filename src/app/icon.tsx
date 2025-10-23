import { ImageResponse } from 'next/og'

export const size = {
  width: 64,
  height: 64,
}

export const contentType = 'image/png'

export default function Icon({ params }: { params: { theme?: string } }) {
  // Получаем тему из URL параметров или используем светлую по умолчанию
  const isDark = params?.theme === 'dark'
  
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: isDark ? 'black' : 'white',
          color: isDark ? 'white' : 'black',
          fontSize: '24px',
          fontWeight: 'bold',
        }}
      >
        hz
      </div>
    ),
    {
      ...size,
    }
  )
}
