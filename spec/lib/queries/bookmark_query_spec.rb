describe Queries::BookmarkQuery do
  describe '#query' do
    let(:user) { create(:user) }

    before do
      11.times.each do
        article = create(:article, user: user)
        create(:bookmark, user: user, article: article)
      end
    end

    let(:per_page) { 10 }
    subject { described_class.query(user.id, page, per_page) }

    context 'when it is the first page' do
      context 'when page is specific' do
        let(:page) { 1 }

        it 'should return list of first 10' do
          expect(subject.size).to eq 10
        end
      end
    end

    context 'when it is the second page' do
      let(:page) { 2 }

      it 'should return list of 1' do
        expect(subject.size).to eq 1
      end
    end
  end
end