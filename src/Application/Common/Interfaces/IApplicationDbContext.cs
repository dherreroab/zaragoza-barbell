using ZaragozaBarbell.Domain.Entities;

namespace ZaragozaBarbell.Application.Common.Interfaces;

public interface IApplicationDbContext
{
    DbSet<Mail> Mail { get; }

    Task<int> SaveChangesAsync(CancellationToken cancellationToken);
}
