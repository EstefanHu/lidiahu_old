const STYLES = {
  lineHeight: '32px',
  fontSize: '20px',
  marginBottom: '25px',
  fontWeight: '400',
  wordBreak: 'break-word' as 'break-word',
  textIndent: '35px',
};

export default function Paragraph({ children }: { children: React.ReactNode }) {
  return <p style={STYLES}>{children}</p>;
}
