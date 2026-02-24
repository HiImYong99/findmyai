import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = '나의 AI 파트너 찾기'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #312e81 100%)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'system-ui, sans-serif',
                    padding: '80px',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '160px',
                        height: '160px',
                        background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #d946ef 100%)',
                        borderRadius: '40px',
                        marginBottom: '40px',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                    }}
                >
                    <span style={{ fontSize: '72px', fontWeight: 900, color: 'white' }}>AI</span>
                </div>

                <div
                    style={{
                        fontSize: '84px',
                        fontWeight: 900,
                        letterSpacing: '-0.03em',
                        marginBottom: '24px',
                        color: 'white',
                        textAlign: 'center',
                        textShadow: '0 4px 10px rgba(0,0,0,0.3)',
                    }}
                >
                    나의 AI 파트너 찾기
                </div>

                <div
                    style={{
                        fontSize: '36px',
                        fontWeight: 600,
                        color: '#94a3b8',
                        textAlign: 'center',
                        maxWidth: '900px',
                        lineHeight: 1.5,
                    }}
                >
                    내 업무 스타일과 성향에 맞는 최적의 AI 서비스와 요금제를 추천받아보세요
                </div>
            </div>
        ),
        { ...size }
    )
}
