class Test < ApplicationRecord
    scope :type, -> (*ids) {
        ret = []
        ids.each do |id|
            ret << Test.where(obj_type: id)
        end

        return ret
    }

    scope :grouped, -> (column) {
        Test.group(column).count
    }
end
