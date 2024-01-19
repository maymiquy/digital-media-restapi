const News = require('../models/news')

class NewsController {
    index = async (req, res) => {
        const news = await News.all()

        if (news.length > 0) {
            const response = {
                message: 'Berhasil menampilkan semua data news',
                data: news
            }
            return res.status(200).json(response)
        } else {
            const response = {
                message: 'Internal server error',
            }
            return res.status(500).json(response)
        }
    }

    store = async (req, res) => {
        const { title, author, content, url, url_image, published_at, category } = req.body
        const news = await News.create(req.body)

        if (!title || !author || !content || !url || !url_image || !published_at || !category) {
            const response = {
                message: 'Gagal menambahkan data berita. Input data tidak lengkap!',
            }

            return res.status(422).json(response)
        } else {
            const response = {
                message: 'Berhasil menambahkan data berita',
                data: news
            }

            return res.status(201).json(response)
        }
    }

    show = async (req, res) => {
        const { id } = req.params
        const news = await News.find(id)

        if (news) {
            const response = {
                message: 'Berhasil menampilkan data berita',
                data: news
            }

            return res.status(200).json(response)
        } else {
            const error = {
                message: 'Gagal menampilkan, Data tidak ditemukan (not found)',
            }

            return res.status(404).json(error)
        }
    }

    update = async (req, res) => {
        const { id } = req.params
        const news = await News.find(id)

        if (news) {
            const newsUpdated = await News.update(id, req.body)

            const response = {
                message: 'Berhasil mengupdate berita',
                data: newsUpdated
            }

            return res.status(200).json(response)
        } else {
            const error = {
                message: 'Gagal mengupdate, Data tidak ditemukan (not found)',
            }

            return res.status(404).json(error)
        }
    }

    destroy = async (req, res) => {
        const { id } = req.params
        const news = await News.find(id)

        if (news) {
            await News.destroyDataById(id)

            const response = {
                message: 'Berhasil menghapus berita',
            }

            return res.status(200).json(response)
        } else {
            const error = {
                message: 'Gagal menghapus, Data tidak ditemukan (not found)',
            }

            return res.status(404).json(error)
        }
    }

    search = async (req, res) => {
        try {
            const news = await News.search(req.params.title);
            if (news && news.data.length > 0) {
                res.status(200).json({
                    message: 'Result found',
                    data: news,
                    total: news.data.length
                });
            } else {
                res.status(404).json({ message: 'Not found' });
            }
        } catch (error) {
            res.status(404).json(error);
        }
    }

    sport = async (req, res) => {
        const results = await News.findByCategory('sport').catch(error => {
            console.error('Error retrieving data:', error);
            return null;
        });

        const response = {
            message: "Berhasilkan menemukan berita category sport",
            data: results,
            total: results.length
        }

        if (results && results.length > 0) {
            return res.status(200).json(response);
        } else {
            return res.status(404).json({ message: 'Berita kategori sport belum tersedia' });
        }
    }

    finance = async (req, res) => {
        const results = await News.findByCategory('finance').catch(error => {
            console.error('Error retrieving data:', error);
            return null;
        });

        const response = {
            message: "Berhasilkan menemukan berita category finance",
            data: results,
            total: results.length
        }

        if (results && results.length > 0) {
            return res.status(200).json(response);
        } else {
            return res.status(404).json({ message: 'Berita kategori finance belum tersedia' });
        }
    }

    automotive = async (req, res) => {
        const results = await News.findByCategory('automotive').catch(error => {
            console.error('Error retrieving data:', error);
            return null;
        });

        const response = {
            message: "Berhasilkan menemukan berita category automotive",
            data: results,
            total: results.length
        }

        if (results && results.length > 0) {
            return res.status(200).json(response);
        } else {
            return res.status(404).json({ message: 'Berita kategori automotive belum tersedia' });
        }
    }
}

const obj = new NewsController();

module.exports = obj;