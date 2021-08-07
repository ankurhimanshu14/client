const admin = require('firebase-admin');

module.exports = {
    filterAnalytics: (req, res) => {
        let filteredData = admin.database().ref().child('analytics/').orderByChild('regdate')
        .startAt(req.body.startDate).endAt(req.body.endDate);

        res.status(200).json(filteredData).end();
    }
}