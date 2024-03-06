export default function countTotalFeedback({ good, neutral, bad }) {
    const total = good + neutral + bad;
    return total;
}
