class AnotherTest < ApplicationRecord
    scope :type, -> (column,*ids) {
        ret = []
        ids.each do |id|
            ret << AnotherTest.where(column => id)
        end

        ret.reject {|list| list.empty? }
    }

    scope :grouped, -> (column) {
        AnotherTest.group(column).count
    }
end
