const container = {
    display: "flex",
    alignItems: "center",
    gap: 10
}
const starContainer = {
    display: "flex",
    gap: 4
}
const textStyle = {
    lineHeight: 1,
    margin: 0
}
export default function StarRating({ maxRate = 5 }) {
    return (
        <div style={container}>
            <div style={starContainer}>
                {Array.from({ length: maxRate }, (_, i) => {
                    return <span>S{i}</span>
                })}
            </div>

            <p style={textStyle}>{maxRate}</p>
        </div>
    )
}