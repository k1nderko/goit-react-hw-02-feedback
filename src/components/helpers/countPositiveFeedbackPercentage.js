export default function countPositiveFeedbackPercentage({
    good,
    neutral,
    bad,
}) {
    const total = good + neutral + bad;
    return total === 0 ? 0 : ((good * 100) / total).toFixed();
}
