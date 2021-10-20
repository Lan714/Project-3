import axios from 'axios'

const HistoryAPI = {
	create: history => axios.post('/api/history', history, {
		headers: {
			Authorization: `Bearer ${localStorage.getItem('token')}`
		}
	}),

	getRankingforSpecificWeek: (num) => axios.get(`api/leaderboard/${num}`
	),

	getWeekNum: () => axios.get('api/history/max', {
		headers: {
			Authorization: `Bearer ${localStorage.getItem('token')}`
		}
	}),

	getHistory: () => axios.get('api/history', {
		headers: {
			Authorization: `Bearer ${localStorage.getItem('token')}`
		}
	}),

	update: (id, updates) => axios.put(`/api/history/${id}`, updates, {
		headers: {
			Authorization: `Bearer ${localStorage.getItem('token')}`
		}
	}),
	delete: id => axios.delete(`/api/history/${id}`, {
		headers: {
			Authorization: `Bearer ${localStorage.getItem('token')}`
		}
	})
}

export default HistoryAPI
