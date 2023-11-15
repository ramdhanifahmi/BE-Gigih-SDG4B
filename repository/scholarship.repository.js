const Scholarship = require('../models/scholarship.model');

class ScholarshipRepository {
    async getAll(page, perPage, filters) {
        const { title, fundingType, educationalLevel, country, sort } = filters;
        const query = {};

        if (title) {
            query.title = { $regex: title, $options: 'i' };
        }

        if (fundingType) {
            query.fundingType = fundingType;
        }

        if (educationalLevel) {
            query.educationalLevel =  educationalLevel ;
        }

        if (country) {
            query.country = { $regex: country, $options: 'i' };
        }

        const sortOptions = {};
        const currentDate = new Date();

        if (sort === 'registrationDateClosest') {
            sortOptions.registrationDate = 1;
            query.registrationDate = { $gte: currentDate };

        } else if (sort === 'deadlineDateClosest') {
            sortOptions.deadlineDate = 1;
            query.deadlineDate = { $gte: currentDate };

        } else if (sort === 'deadlineDateFurthest') {
            sortOptions.deadlineDate = -1;
            query.deadlineDate = { $gte: currentDate };

        } else {
            sortOptions.updatedAt = -1; // Default to sorting by updatedAt in descending order (newest first)
        }

        try {
            const totalCount = await Scholarship.countDocuments(query);
            const scholarships = await Scholarship.find(query)
                .sort(sortOptions)
                .skip((page - 1) * perPage)
                .limit(perPage)
                .exec();


            const totalPages = Math.ceil(totalCount / perPage);

            return {
                scholarships,
                totalPages,
                page,
            };
        } catch (error) {
            throw new Error(`Error retrieving scholarships: ${error.message}`);
        }
    }

    async findById(id) {
        return Scholarship.findById(id);
    }

    async findBySlug(slug) {
        return Scholarship.findOne({ slug });
    }

    async create(data) {
        return Scholarship.create(data);
    }

    async update(id, data) {
        return Scholarship.findByIdAndUpdate(id, data, { new: true });
    }

    async delete(id) {
        return Scholarship.findByIdAndDelete(id);
    }
}

module.exports = new ScholarshipRepository();
